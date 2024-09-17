<?php 
//check if current user role is allowed access to the pages
$can_add = ACL::is_allowed("tbl_user/add");
$can_edit = ACL::is_allowed("tbl_user/edit");
$can_view = ACL::is_allowed("tbl_user/view");
$can_delete = ACL::is_allowed("tbl_user/delete");
?>
<?php
$comp_model = new SharedController;
$page_element_id = "view-page-" . random_str();
$current_page = $this->set_current_page_link();
$csrf_token = Csrf::$token;
//Page Data Information from Controller
$data = $this->view_data;
//$rec_id = $data['__tableprimarykey'];
$page_id = $this->route->page_id; //Page id from url
$view_title = $this->view_title;
$show_header = $this->show_header;
$show_edit_btn = $this->show_edit_btn;
$show_delete_btn = $this->show_delete_btn;
$show_export_btn = $this->show_export_btn;
?>
<section class="page" id="<?php echo $page_element_id; ?>" data-page-type="view"  data-display-type="table" data-page-url="<?php print_link($current_page); ?>">
    <?php
    if( $show_header == true ){
    ?>
    <div  class="bg-light p-3 mb-3">
        <div class="container">
            <div class="row ">
                <div class="col ">
                    <h4 class="record-title">View - User Information</h4>
                </div>
            </div>
        </div>
    </div>
    <?php
    }
    ?>
    <div  class="">
        <div class="container">
            <div class="row ">
                <div class="col-md-12 comp-grid">
                    <?php $this :: display_page_errors(); ?>
                    <div  class="card animated fadeIn page-content">
                        <?php
                        $counter = 0;
                        if(!empty($data)){
                        $rec_id = (!empty($data['user_id']) ? urlencode($data['user_id']) : null);
                        $counter++;
                        ?>
                        <div id="page-report-body" class="">
                            <table class="table table-hover table-borderless table-striped">
                                <!-- Table Body Start -->
                                <tbody class="page-data" id="page-data-<?php echo $page_element_id; ?>">
                                    <tr  class="td-user_id">
                                        <th class="title"> User Id: </th>
                                        <td class="value"> <?php echo $data['user_id']; ?></td>
                                    </tr>
                                    <tr  class="td-first_name">
                                        <th class="title"> First Name: </th>
                                        <td class="value"> <?php echo $data['first_name']; ?></td>
                                    </tr>
                                    <tr  class="td-last_name">
                                        <th class="title"> Last Name: </th>
                                        <td class="value"> <?php echo $data['last_name']; ?></td>
                                    </tr>
                                    <tr  class="td-username">
                                        <th class="title"> Username: </th>
                                        <td class="value"> <?php echo $data['username']; ?></td>
                                    </tr>
                                    <tr  class="td-email">
                                        <th class="title"> Email: </th>
                                        <td class="value"> <?php echo $data['email']; ?></td>
                                    </tr>
                                    <tr  class="td-role">
                                        <th class="title"> Role: </th>
                                        <td class="value"> <?php echo $data['role']; ?></td>
                                    </tr>
                                    <tr  class="td-account_status">
                                        <th class="title"> Account Status: </th>
                                        <td class="value">
                                            <span <?php if($can_edit){ ?> data-source='<?php echo json_encode_quote(Menu :: $account_status); ?>' 
                                                data-value="<?php echo $data['account_status']; ?>" 
                                                data-pk="<?php echo $data['user_id'] ?>" 
                                                data-url="<?php print_link("tbl_user/editfield/" . urlencode($data['user_id'])); ?>" 
                                                data-name="account_status" 
                                                data-title="Select a value ..." 
                                                data-placement="left" 
                                                data-toggle="click" 
                                                data-type="select" 
                                                data-mode="popover" 
                                                data-showbuttons="left" 
                                                class="is-editable" <?php } ?>>
                                                <?php echo $data['account_status']; ?> 
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                                <!-- Table Body End -->
                            </table>
                        </div>
                        <div class="p-3 d-flex">
                            <?php if($can_edit){ ?>
                            <a class="btn btn-sm btn-info"  href="<?php print_link("tbl_user/edit/$rec_id"); ?>">
                                <i class="fa fa-edit"></i> Edit
                            </a>
                            <?php } ?>
                            <?php if($can_delete){ ?>
                            <a class="btn btn-sm btn-danger record-delete-btn mx-1"  href="<?php print_link("tbl_user/delete/$rec_id/?csrf_token=$csrf_token&redirect=$current_page"); ?>" data-prompt-msg="Are you sure you want to delete this record?" data-display-style="modal">
                                <i class="fa fa-times"></i> Delete
                            </a>
                            <?php } ?>
                        </div>
                        <?php
                        }
                        else{
                        ?>
                        <!-- Empty Record Message -->
                        <div class="text-muted p-3">
                            <i class="fa fa-ban"></i> No Record Found
                        </div>
                        <?php
                        }
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
