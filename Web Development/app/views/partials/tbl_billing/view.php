<?php 
//check if current user role is allowed access to the pages
$can_add = ACL::is_allowed("tbl_billing/add");
$can_edit = ACL::is_allowed("tbl_billing/edit");
$can_view = ACL::is_allowed("tbl_billing/view");
$can_delete = ACL::is_allowed("tbl_billing/delete");
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
                    <h4 class="record-title">View - Billing Information</h4>
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
                        $rec_id = (!empty($data['bill_id']) ? urlencode($data['bill_id']) : null);
                        $counter++;
                        ?>
                        <div id="page-report-body" class="">
                            <table class="table table-hover table-borderless table-striped">
                                <!-- Table Body Start -->
                                <tbody class="page-data" id="page-data-<?php echo $page_element_id; ?>">
                                    <tr  class="td-tbl_Meter_meter_id">
                                        <th class="title"> Meter Id: </th>
                                        <td class="value"> <?php echo $data['tbl_Meter_meter_id']; ?></td>
                                    </tr>
                                    <tr  class="td-bill_id">
                                        <th class="title"> Bill Id: </th>
                                        <td class="value"> <?php echo $data['bill_id']; ?></td>
                                    </tr>
                                    <tr  class="td-billing_period_start">
                                        <th class="title"> Billing Period Start: </th>
                                        <td class="value"> <?php echo $data['billing_period_start']; ?></td>
                                    </tr>
                                    <tr  class="td-billing_period_end">
                                        <th class="title"> Billing Period End: </th>
                                        <td class="value"> <?php echo $data['billing_period_end']; ?></td>
                                    </tr>
                                    <tr  class="td-total_amount">
                                        <th class="title"> Total Amount: </th>
                                        <td class="value"> <?php echo $data['total_amount']; ?></td>
                                    </tr>
                                    <tr  class="td-due_date">
                                        <th class="title"> Due Date: </th>
                                        <td class="value"> <?php echo $data['due_date']; ?></td>
                                    </tr>
                                    <tr  class="td-bill_status">
                                        <th class="title"> Bill Status: </th>
                                        <td class="value">
                                            <span <?php if($can_edit){ ?> data-value="<?php echo $data['bill_status']; ?>" 
                                                data-pk="<?php echo $data['bill_id'] ?>" 
                                                data-url="<?php print_link("tbl_billing/editfield/" . urlencode($data['bill_id'])); ?>" 
                                                data-name="bill_status" 
                                                data-title="Enter Bill Status" 
                                                data-placement="left" 
                                                data-toggle="click" 
                                                data-type="text" 
                                                data-mode="popover" 
                                                data-showbuttons="left" 
                                                class="is-editable" <?php } ?>>
                                                <?php echo $data['bill_status']; ?> 
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                                <!-- Table Body End -->
                            </table>
                        </div>
                        <div class="p-3 d-flex">
                            <?php if($can_edit){ ?>
                            <a class="btn btn-sm btn-info"  href="<?php print_link("tbl_billing/edit/$rec_id"); ?>">
                                <i class="fa fa-edit"></i> Edit
                            </a>
                            <?php } ?>
                            <?php if($can_delete){ ?>
                            <a class="btn btn-sm btn-danger record-delete-btn mx-1"  href="<?php print_link("tbl_billing/delete/$rec_id/?csrf_token=$csrf_token&redirect=$current_page"); ?>" data-prompt-msg="Are you sure you want to delete this record?" data-display-style="modal">
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
