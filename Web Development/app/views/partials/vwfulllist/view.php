<?php 
//check if current user role is allowed access to the pages
$can_add = ACL::is_allowed("vwfulllist/add");
$can_edit = ACL::is_allowed("vwfulllist/edit");
$can_view = ACL::is_allowed("vwfulllist/view");
$can_delete = ACL::is_allowed("vwfulllist/delete");
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
                    <h4 class="record-title">View  Vwfulllist</h4>
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
                        $rec_id = (!empty($data['']) ? urlencode($data['']) : null);
                        $counter++;
                        ?>
                        <div id="page-report-body" class="">
                            <table class="table table-hover table-borderless table-striped">
                                <!-- Table Body Start -->
                                <tbody class="page-data" id="page-data-<?php echo $page_element_id; ?>">
                                    <tr  class="td-customer_id">
                                        <th class="title"> Customer Id: </th>
                                        <td class="value"> <?php echo $data['customer_id']; ?></td>
                                    </tr>
                                    <tr  class="td-first_name">
                                        <th class="title"> First Name: </th>
                                        <td class="value"> <?php echo $data['first_name']; ?></td>
                                    </tr>
                                    <tr  class="td-last_name">
                                        <th class="title"> Last Name: </th>
                                        <td class="value"> <?php echo $data['last_name']; ?></td>
                                    </tr>
                                    <tr  class="td-city">
                                        <th class="title"> City: </th>
                                        <td class="value"> <?php echo $data['city']; ?></td>
                                    </tr>
                                    <tr  class="td-meter_id">
                                        <th class="title"> Meter Id: </th>
                                        <td class="value"> <?php echo $data['meter_id']; ?></td>
                                    </tr>
                                    <tr  class="td-meter_type">
                                        <th class="title"> Meter Type: </th>
                                        <td class="value"> <?php echo $data['meter_type']; ?></td>
                                    </tr>
                                    <tr  class="td-meter_status">
                                        <th class="title"> Meter Status: </th>
                                        <td class="value"> <?php echo $data['meter_status']; ?></td>
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
                                    <tr  class="td-bill_status">
                                        <th class="title"> Bill Status: </th>
                                        <td class="value"> <?php echo $data['bill_status']; ?></td>
                                    </tr>
                                    <tr  class="td-payment_id">
                                        <th class="title"> Payment Id: </th>
                                        <td class="value"> <?php echo $data['payment_id']; ?></td>
                                    </tr>
                                    <tr  class="td-amount">
                                        <th class="title"> Amount: </th>
                                        <td class="value"> <?php echo $data['amount']; ?></td>
                                    </tr>
                                    <tr  class="td-reading_id">
                                        <th class="title"> Reading Id: </th>
                                        <td class="value"> <?php echo $data['reading_id']; ?></td>
                                    </tr>
                                    <tr  class="td-reading_date">
                                        <th class="title"> Reading Date: </th>
                                        <td class="value"> <?php echo $data['reading_date']; ?></td>
                                    </tr>
                                    <tr  class="td-value">
                                        <th class="title"> Value: </th>
                                        <td class="value"> <?php echo $data['value']; ?></td>
                                    </tr>
                                </tbody>
                                <!-- Table Body End -->
                            </table>
                        </div>
                        <div class="p-3 d-flex">
                            <div class="dropup export-btn-holder mx-1">
                                <button class="btn btn-sm btn-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fa fa-save"></i> Export
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <?php $export_print_link = $this->set_current_page_link(array('format' => 'print')); ?>
                                    <a class="dropdown-item export-link-btn" data-format="print" href="<?php print_link($export_print_link); ?>" target="_blank">
                                        <img src="<?php print_link('assets/images/print.png') ?>" class="mr-2" /> PRINT
                                        </a>
                                        <?php $export_pdf_link = $this->set_current_page_link(array('format' => 'pdf')); ?>
                                        <a class="dropdown-item export-link-btn" data-format="pdf" href="<?php print_link($export_pdf_link); ?>" target="_blank">
                                            <img src="<?php print_link('assets/images/pdf.png') ?>" class="mr-2" /> PDF
                                            </a>
                                            <?php $export_word_link = $this->set_current_page_link(array('format' => 'word')); ?>
                                            <a class="dropdown-item export-link-btn" data-format="word" href="<?php print_link($export_word_link); ?>" target="_blank">
                                                <img src="<?php print_link('assets/images/doc.png') ?>" class="mr-2" /> WORD
                                                </a>
                                                <?php $export_csv_link = $this->set_current_page_link(array('format' => 'csv')); ?>
                                                <a class="dropdown-item export-link-btn" data-format="csv" href="<?php print_link($export_csv_link); ?>" target="_blank">
                                                    <img src="<?php print_link('assets/images/csv.png') ?>" class="mr-2" /> CSV
                                                    </a>
                                                    <?php $export_excel_link = $this->set_current_page_link(array('format' => 'excel')); ?>
                                                    <a class="dropdown-item export-link-btn" data-format="excel" href="<?php print_link($export_excel_link); ?>" target="_blank">
                                                        <img src="<?php print_link('assets/images/xsl.png') ?>" class="mr-2" /> EXCEL
                                                        </a>
                                                    </div>
                                                </div>
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
