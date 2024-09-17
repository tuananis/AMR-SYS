<?php 
//check if current user role is allowed access to the pages
$can_add = ACL::is_allowed("tbl_customer/add");
$can_edit = ACL::is_allowed("tbl_customer/edit");
$can_view = ACL::is_allowed("tbl_customer/view");
$can_delete = ACL::is_allowed("tbl_customer/delete");
?>
<?php
$comp_model = new SharedController;
$page_element_id = "list-page-" . random_str();
$current_page = $this->set_current_page_link();
$csrf_token = Csrf::$token;
//Page Data From Controller
$view_data = $this->view_data;
$records = $view_data->records;
$record_count = $view_data->record_count;
$total_records = $view_data->total_records;
$field_name = $this->route->field_name;
$field_value = $this->route->field_value;
$view_title = $this->view_title;
$show_header = $this->show_header;
$show_footer = $this->show_footer;
$show_pagination = $this->show_pagination;
?>
<section class="page" id="<?php echo $page_element_id; ?>" data-page-type="list"  data-display-type="table" data-page-url="<?php print_link($current_page); ?>">
    <?php
    if( $show_header == true ){
    ?>
    <div  class="bg-light p-3 mb-3">
        <div class="container-fluid">
            <div class="row ">
                <div class="col ">
                    <h4 class="record-title">Customer Information</h4>
                </div>
                <div class="col-sm-3 ">
                    <?php if($can_add){ ?>
                    <a  class="btn btn btn-primary my-1" href="<?php print_link("tbl_customer/add") ?>">
                        <i class="fa fa-plus"></i>                              
                        Add Customer 
                    </a>
                    <?php } ?>
                </div>
                <div class="col-sm-4 ">
                    <form  class="search" action="<?php print_link('tbl_customer'); ?>" method="get">
                        <div class="input-group">
                            <input value="<?php echo get_value('search'); ?>" class="form-control" type="text" name="search"  placeholder="Search" />
                                <div class="input-group-append">
                                    <button class="btn btn-primary"><i class="fa fa-search"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-12 comp-grid">
                        <div class="">
                            <!-- Page bread crumbs components-->
                            <?php
                            if(!empty($field_name) || !empty($_GET['search'])){
                            ?>
                            <hr class="sm d-block d-sm-none" />
                            <nav class="page-header-breadcrumbs mt-2" aria-label="breadcrumb">
                                <ul class="breadcrumb m-0 p-1">
                                    <?php
                                    if(!empty($field_name)){
                                    ?>
                                    <li class="breadcrumb-item">
                                        <a class="text-decoration-none" href="<?php print_link('tbl_customer'); ?>">
                                            <i class="fa fa-angle-left"></i>
                                        </a>
                                    </li>
                                    <li class="breadcrumb-item">
                                        <?php echo (get_value("tag") ? get_value("tag")  :  make_readable($field_name)); ?>
                                    </li>
                                    <li  class="breadcrumb-item active text-capitalize font-weight-bold">
                                        <?php echo (get_value("label") ? get_value("label")  :  make_readable(urldecode($field_value))); ?>
                                    </li>
                                    <?php 
                                    }   
                                    ?>
                                    <?php
                                    if(get_value("search")){
                                    ?>
                                    <li class="breadcrumb-item">
                                        <a class="text-decoration-none" href="<?php print_link('tbl_customer'); ?>">
                                            <i class="fa fa-angle-left"></i>
                                        </a>
                                    </li>
                                    <li class="breadcrumb-item text-capitalize">
                                        Search
                                    </li>
                                    <li  class="breadcrumb-item active text-capitalize font-weight-bold"><?php echo get_value("search"); ?></li>
                                    <?php
                                    }
                                    ?>
                                </ul>
                            </nav>
                            <!--End of Page bread crumbs components-->
                            <?php
                            }
                            ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php
        }
        ?>
        <div  class="">
            <div class="container-fluid">
                <div class="row ">
                    <div class="col-sm-2 comp-grid">
                        <form method="get" action="<?php print_link($current_page) ?>" class="form filter-form">
                            <div class="card mb-3">
                                <div class="card-header h4 h4">Filter By City</div>
                                <div class="p-2">
                                    <?php 
                                    $tbl_customer_city_options = $comp_model -> tbl_customer_tbl_customercity_option_list();
                                    if(!empty($tbl_customer_city_options)){
                                    $ci = 0;
                                    foreach($tbl_customer_city_options as $option){
                                    $ci++;
                                    $value = (!empty($option['value']) ? $option['value'] : null);
                                    $label = (!empty($option['label']) ? $option['label'] : $value);
                                    $checked = $this->set_field_checked('tbl_customer_city', $value);
                                    ?>
                                    <label class="custom-control custom-checkbox custom-control-inline">
                                        <input id="" class="custom-control-input" <?php echo $checked; ?> value="<?php echo $value; ?>" type="checkbox" name="tbl_customer_city[]"  />
                                            <span class="custom-control-label"><?php echo $label; ?></span>
                                        </label>
                                        <?php
                                        }
                                        }
                                        ?>
                                    </div>
                                </div>
                                <hr />
                                <div class="form-group text-center">
                                    <button class="btn btn-primary">Filter</button>
                                </div>
                            </form>
                        </div>
                        <div class="col-sm-10 comp-grid">
                            <?php $this :: display_page_errors(); ?>
                            <div class="filter-tags mb-2">
                                <?php
                                if(!empty(get_value('tbl_customer_city'))){
                                ?>
                                <div class="filter-chip card bg-light">
                                    <b>Tbl Customer City :</b> 
                                    <?php 
                                    if(get_value('tbl_customer_citylabel')){
                                    echo get_value('tbl_customer_citylabel');
                                    }
                                    else{
                                    echo get_value('tbl_customer_city');
                                    }
                                    $remove_link = unset_get_value('tbl_customer_city', $this->route->page_url);
                                    ?>
                                    <a href="<?php print_link($remove_link); ?>" class="close-btn">
                                        &times;
                                    </a>
                                </div>
                                <?php
                                }
                                ?>
                            </div>
                            <div  class=" animated fadeIn page-content">
                                <div id="tbl_customer-list-records">
                                    <div id="page-report-body" class="table-responsive">
                                        <table class="table  table-striped table-sm text-left">
                                            <thead class="table-header bg-light">
                                                <tr>
                                                    <?php if($can_delete){ ?>
                                                    <th class="td-checkbox">
                                                        <label class="custom-control custom-checkbox custom-control-inline">
                                                            <input class="toggle-check-all custom-control-input" type="checkbox" />
                                                            <span class="custom-control-label"></span>
                                                        </label>
                                                    </th>
                                                    <?php } ?>
                                                    <th  <?php echo (get_value('orderby')=='customer_id' ? 'class="sortedby td-customer_id"' : null); ?>>
                                                        <?php Html :: get_field_order_link('customer_id', "Customer Id"); ?>
                                                    </th>
                                                    <th  class="td-first_name"> First Name</th>
                                                    <th  class="td-last_name"> Last Name</th>
                                                    <th  class="td-address"> Address</th>
                                                    <th  class="td-city"> City</th>
                                                    <th  class="td-phone_number"> Phone Number</th>
                                                    <th class="td-btn"></th>
                                                </tr>
                                            </thead>
                                            <?php
                                            if(!empty($records)){
                                            ?>
                                            <tbody class="page-data" id="page-data-<?php echo $page_element_id; ?>">
                                                <!--record-->
                                                <?php
                                                $counter = 0;
                                                foreach($records as $data){
                                                $rec_id = (!empty($data['customer_id']) ? urlencode($data['customer_id']) : null);
                                                $counter++;
                                                ?>
                                                <tr>
                                                    <?php if($can_delete){ ?>
                                                    <th class=" td-checkbox">
                                                        <label class="custom-control custom-checkbox custom-control-inline">
                                                            <input class="optioncheck custom-control-input" name="optioncheck[]" value="<?php echo $data['customer_id'] ?>" type="checkbox" />
                                                                <span class="custom-control-label"></span>
                                                            </label>
                                                        </th>
                                                        <?php } ?>
                                                        <td class="td-customer_id"><a href="<?php print_link("tbl_customer/view/$data[customer_id]") ?>"><?php echo $data['customer_id']; ?></a></td>
                                                        <td class="td-first_name"> <?php echo $data['first_name']; ?></td>
                                                        <td class="td-last_name"> <?php echo $data['last_name']; ?></td>
                                                        <td class="td-address"> <?php echo $data['address']; ?></td>
                                                        <td class="td-city"> <?php echo $data['city']; ?></td>
                                                        <td class="td-phone_number"><a href="<?php print_link("tel:$data[phone_number]") ?>"><?php echo $data['phone_number']; ?></a></td>
                                                        <th class="td-btn">
                                                            <?php if($can_view){ ?>
                                                            <a class="btn btn-sm btn-success has-tooltip page-modal" title="View Record" href="<?php print_link("tbl_customer/view/$rec_id"); ?>">
                                                                <i class="fa fa-eye"></i> View
                                                            </a>
                                                            <?php } ?>
                                                            <?php if($can_edit){ ?>
                                                            <a class="btn btn-sm btn-info has-tooltip page-modal" title="Edit This Record" href="<?php print_link("tbl_customer/edit/$rec_id"); ?>">
                                                                <i class="fa fa-edit"></i> Edit
                                                            </a>
                                                            <?php } ?>
                                                            <?php if($can_delete){ ?>
                                                            <a class="btn btn-sm btn-danger has-tooltip record-delete-btn" title="Delete this record" href="<?php print_link("tbl_customer/delete/$rec_id/?csrf_token=$csrf_token&redirect=$current_page"); ?>" data-prompt-msg="Are you sure you want to delete this record?" data-display-style="modal">
                                                                <i class="fa fa-times"></i>
                                                                Delete
                                                            </a>
                                                            <?php } ?>
                                                        </th>
                                                    </tr>
                                                    <?php 
                                                    }
                                                    ?>
                                                    <!--endrecord-->
                                                </tbody>
                                                <tbody class="search-data" id="search-data-<?php echo $page_element_id; ?>"></tbody>
                                                <?php
                                                }
                                                ?>
                                            </table>
                                            <?php 
                                            if(empty($records)){
                                            ?>
                                            <h4 class="bg-light text-center border-top text-muted animated bounce  p-3">
                                                <i class="fa fa-ban"></i> No record found
                                            </h4>
                                            <?php
                                            }
                                            ?>
                                        </div>
                                        <?php
                                        if( $show_footer && !empty($records)){
                                        ?>
                                        <div class=" border-top mt-2">
                                            <div class="row justify-content-center">    
                                                <div class="col-md-auto justify-content-center">    
                                                    <div class="p-3 d-flex justify-content-between">    
                                                        <?php if($can_delete){ ?>
                                                        <button data-prompt-msg="Are you sure you want to delete these records?" data-display-style="modal" data-url="<?php print_link("tbl_customer/delete/{sel_ids}/?csrf_token=$csrf_token&redirect=$current_page"); ?>" class="btn btn-sm btn-danger btn-delete-selected d-none">
                                                            <i class="fa fa-times"></i> Delete Selected
                                                        </button>
                                                        <?php } ?>
                                                    </div>
                                                </div>
                                                <div class="col">   
                                                    <?php
                                                    if($show_pagination == true){
                                                    $pager = new Pagination($total_records, $record_count);
                                                    $pager->route = $this->route;
                                                    $pager->show_page_count = true;
                                                    $pager->show_record_count = true;
                                                    $pager->show_page_limit =true;
                                                    $pager->limit_count = $this->limit_count;
                                                    $pager->show_page_number_list = true;
                                                    $pager->pager_link_range=5;
                                                    $pager->render();
                                                    }
                                                    ?>
                                                </div>
                                            </div>
                                        </div>
                                        <?php
                                        }
                                        ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
