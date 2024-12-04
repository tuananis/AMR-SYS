<?php 
/**
 * Account Page Controller
 * @category  Controller
 */
class AccountController extends SecureController{
	function __construct(){
		parent::__construct(); 
		$this->tablename = "tbl_user";
		$this->soft_delete = true;
		$this->delete_field_name = "is_deleted";
		$this->delete_field_value = "1";
	}
	/**
		* Index Action
		* @return null
		*/
	function index(){
		$db = $this->GetModel();
		$rec_id = $this->rec_id = USER_ID; //get current user id from session
		$db->where ("user_id", $rec_id);
		$tablename = $this->tablename;
		$fields = array("user_id", 
			"first_name", 
			"last_name", 
			"username", 
			"email", 
			"role", 
			"account_status");
		$user = $db->getOne($tablename , $fields);
		if(!empty($user)){
			$page_title = $this->view->page_title = "My Account";
			$this->render_view("account/view.php", $user);
		}
		else{
			$this->set_page_error();
			$this->render_view("account/view.php");
		}
	}
	/**
     * Update user account record with formdata
	 * @param $formdata array() from $_POST
     * @return array
     */
	function edit($formdata = null){
		$request = $this->request;
		$db = $this->GetModel();
		$rec_id = $this->rec_id = USER_ID;
		$tablename = $this->tablename;
		 //editable fields
		$fields = $this->fields = array("user_id","first_name","last_name","username","email","role","account_status");
		if($formdata){
			$postdata = $this->format_request_data($formdata);
			$this->rules_array = array(
				'first_name' => 'required',
				'last_name' => 'required',
				'username' => 'required',
				'email' => 'required|valid_email',
				'role' => 'required',
				'account_status' => 'required',
			);
			$this->sanitize_array = array(
				'first_name' => 'sanitize_string',
				'last_name' => 'sanitize_string',
				'username' => 'sanitize_string',
				'email' => 'sanitize_string',
				'role' => 'sanitize_string',
				'account_status' => 'sanitize_string',
			);
			$modeldata = $this->modeldata = $this->validate_form($postdata);
			//Check if Duplicate Record Already Exit In The Database
			if(isset($modeldata['username'])){
				$db->where("username", $modeldata['username'])->where("user_id", $rec_id, "!=");
				if($db->has($tablename)){
					$this->view->page_error[] = $modeldata['username']." Already exist!";
				}
			}
			//Check if Duplicate Record Already Exit In The Database
			if(isset($modeldata['email'])){
				$db->where("email", $modeldata['email'])->where("user_id", $rec_id, "!=");
				if($db->has($tablename)){
					$this->view->page_error[] = $modeldata['email']." Already exist!";
				}
			} 
			if($this->validated()){
				$db->where("tbl_user.user_id", $rec_id);;
				$bool = $db->update($tablename, $modeldata);
				$numRows = $db->getRowCount(); //number of affected rows. 0 = no record field updated
				if($bool && $numRows){
					$this->write_to_log("edit", "true");
					$this->set_flash_msg("Record updated successfully", "success");
					$db->where ("user_id", $rec_id);
					$user = $db->getOne($tablename , "*");
					set_session("user_data", $user);// update session with new user data
					return $this->redirect("account");
				}
				else{
					if($db->getLastError()){
						$this->set_page_error();
					}
					elseif(!$numRows){
						//not an error, but no record was updated
						$this->set_flash_msg("No record updated", "warning");
						return	$this->redirect("account");
					}
				}
			}
		}
		$db->where("tbl_user.user_id", $rec_id);;
		$data = $db->getOne($tablename, $fields);
		$page_title = $this->view->page_title = "My Account";
		if(!$data){
			$this->set_page_error();
		}
		return $this->render_view("account/edit.php", $data);
	}
	/**
     * Change account email
     * @return BaseView
     */
	function change_email($formdata = null){
		if($formdata){
			$email = trim($formdata['email']);
			$db = $this->GetModel();
			$rec_id = $this->rec_id = USER_ID; //get current user id from session
			$tablename = $this->tablename;
			$db->where ("user_id", $rec_id);
			$result = $db->update($tablename, array('email' => $email ));
			if($result){
				$this->write_to_log("emailchange", "true");
				$this->set_flash_msg("Email address changed successfully", "success");
				$this->redirect("account");
			}
			else{
				$this->set_page_error("Email not changed");
			}
		}
		return $this->render_view("account/change_email.php");
	}
}
