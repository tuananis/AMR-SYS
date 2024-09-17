<?php 
/**
 * Vwfulllist Page Controller
 * @category  Controller
 */
class VwfulllistController extends SecureController{
	function __construct(){
		parent::__construct();
		$this->tablename = "vwfulllist";
	}
	/**
     * List page records
     * @param $fieldname (filter record by a field) 
     * @param $fieldvalue (filter field value)
     * @return BaseView
     */
	function index($fieldname = null , $fieldvalue = null){
		$request = $this->request;
		$db = $this->GetModel();
		$tablename = $this->tablename;
		$fields = array("customer_id", 
			"first_name", 
			"last_name", 
			"city", 
			"meter_id", 
			"meter_type", 
			"meter_status", 
			"bill_id", 
			"billing_period_start", 
			"billing_period_end", 
			"total_amount", 
			"bill_status", 
			"payment_id", 
			"amount", 
			"reading_id", 
			"reading_date", 
			"value");
		$pagination = $this->get_pagination(MAX_RECORD_COUNT); // get current pagination e.g array(page_number, page_limit)
		//search table record
		if(!empty($request->search)){
			$text = trim($request->search); 
			$search_condition = "(
				vwfulllist.customer_id LIKE ? OR 
				vwfulllist.first_name LIKE ? OR 
				vwfulllist.last_name LIKE ? OR 
				vwfulllist.city LIKE ? OR 
				vwfulllist.meter_id LIKE ? OR 
				vwfulllist.meter_type LIKE ? OR 
				vwfulllist.meter_status LIKE ? OR 
				vwfulllist.bill_id LIKE ? OR 
				vwfulllist.billing_period_start LIKE ? OR 
				vwfulllist.billing_period_end LIKE ? OR 
				vwfulllist.total_amount LIKE ? OR 
				vwfulllist.bill_status LIKE ? OR 
				vwfulllist.payment_id LIKE ? OR 
				vwfulllist.amount LIKE ? OR 
				vwfulllist.reading_id LIKE ? OR 
				vwfulllist.reading_date LIKE ? OR 
				vwfulllist.value LIKE ?
			)";
			$search_params = array(
				"%$text%","%$text%","%$text%","%$text%","%$text%","%$text%","%$text%","%$text%","%$text%","%$text%","%$text%","%$text%","%$text%","%$text%","%$text%","%$text%","%$text%"
			);
			//setting search conditions
			$db->where($search_condition, $search_params);
			 //template to use when ajax search
			$this->view->search_template = "vwfulllist/search.php";
		}
		if(!empty($request->orderby)){
			$orderby = $request->orderby;
			$ordertype = (!empty($request->ordertype) ? $request->ordertype : ORDER_TYPE);
			$db->orderBy($orderby, $ordertype);
		}
		else{
			$db->orderBy("vwfulllist.customer_id", ORDER_TYPE);
		}
		if($fieldname){
			$db->where($fieldname , $fieldvalue); //filter by a single field name
		}
		$tc = $db->withTotalCount();
		$records = $db->get($tablename, $pagination, $fields);
		$records_count = count($records);
		$total_records = intval($tc->totalCount);
		$page_limit = $pagination[1];
		$total_pages = ceil($total_records / $page_limit);
		$data = new stdClass;
		$data->records = $records;
		$data->record_count = $records_count;
		$data->total_records = $total_records;
		$data->total_page = $total_pages;
		if($db->getLastError()){
			$this->set_page_error();
		}
		$page_title = $this->view->page_title = "Vwfulllist";
		$this->view->report_filename = date('Y-m-d') . '-' . $page_title;
		$this->view->report_title = $page_title;
		$this->view->report_layout = "report_layout.php";
		$this->view->report_paper_size = "A4";
		$this->view->report_orientation = "portrait";
		$this->render_view("vwfulllist/list.php", $data); //render the full page
	}
// No View Function Generated Because No Field is Defined as the Primary Key on the Database Table
}
