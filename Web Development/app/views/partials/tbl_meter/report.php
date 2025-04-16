<?php 
//check if current user role is allowed access to the pages
$can_add = ACL::is_allowed("tbl_meter/add");
$can_edit = ACL::is_allowed("tbl_meter/edit");
$can_view = ACL::is_allowed("tbl_meter/view");
$can_delete = ACL::is_allowed("tbl_meter/delete");
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
                    <h4 class="record-title">Electricity Water Meters Report</h4>
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
                                    <a class="text-decoration-none" href="<?php print_link('tbl_meter'); ?>">
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
                                    <a class="text-decoration-none" href="<?php print_link('tbl_meter'); ?>">
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
                <div class="col-sm-6 comp-grid">
                    <form method="get" action="<?php print_link($current_page) ?>" class="form filter-form">
                        <div class="card card-body">
                            <?php 
                            $chartdata = $comp_model->barchart_totalmetersbytype();
                            ?>
                            <div>
                                <h4>Total Meters by Type</h4>
                                <small class="text-muted"></small>
                            </div>
                            <hr />
                            <canvas id="barchart_totalmetersbytype"></canvas>
                            <script>
                                $(function (){
                                var chartData = {
                                labels : <?php echo json_encode($chartdata['labels']); ?>,
                                datasets : [
                                {
                                label: 'Dataset 1',
                                backgroundColor:'<?php echo random_color(0.9); ?>',
                                type:'',
                                borderWidth:3,
                                data : <?php echo json_encode($chartdata['datasets'][0]); ?>,
                                }
                                ]
                                }
                                var ctx = document.getElementById('barchart_totalmetersbytype');
                                var chart = new Chart(ctx, {
                                type:'bar',
                                data: chartData,
                                options: {
                                scaleStartValue: 0,
                                responsive: true,
                                scales: {
                                xAxes: [{
                                ticks:{display: true},
                                gridLines:{display: true},
                                categoryPercentage: 1.0,
                                barPercentage: 0.8,
                                scaleLabel: {
                                display: true,
                                labelString: "Type"
                                },
                                }],
                                yAxes: [{
                                ticks: {
                                beginAtZero: true,
                                display: true
                                },
                                scaleLabel: {
                                display: true,
                                labelString: "Count"
                                }
                                }]
                                },
                                }
                                ,
                                })});
                            </script>
                        </div>
                        <hr />
                        <div class="form-group text-center">
                            <button class="btn btn-primary">Filter</button>
                        </div>
                    </form>
                </div>
                <div class="col-sm-6 comp-grid">
                    <div class="card card-body">
                        <?php 
                        $chartdata = $comp_model->barchart_totalmetersbystatus();
                        ?>
                        <div>
                            <h4>Total Meters by Status</h4>
                            <small class="text-muted"></small>
                        </div>
                        <hr />
                        <canvas id="barchart_totalmetersbystatus"></canvas>
                        <script>
                            $(function (){
                            var chartData = {
                            labels : <?php echo json_encode($chartdata['labels']); ?>,
                            datasets : [
                            {
                            label: 'Dataset 1',
                            backgroundColor:'<?php echo random_color(0.9); ?>',
                            type:'',
                            borderWidth:3,
                            data : <?php echo json_encode($chartdata['datasets'][0]); ?>,
                            }
                            ]
                            }
                            var ctx = document.getElementById('barchart_totalmetersbystatus');
                            var chart = new Chart(ctx, {
                            type:'bar',
                            data: chartData,
                            options: {
                            scaleStartValue: 0,
                            responsive: true,
                            scales: {
                            xAxes: [{
                            ticks:{display: true},
                            gridLines:{display: true},
                            categoryPercentage: 1.0,
                            barPercentage: 0.8,
                            scaleLabel: {
                            display: true,
                            labelString: "Status"
                            },
                            }],
                            yAxes: [{
                            ticks: {
                            beginAtZero: true,
                            display: true
                            },
                            scaleLabel: {
                            display: true,
                            labelString: "Count"
                            }
                            }]
                            },
                            }
                            ,
                            })});
                        </script>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div  class="">
        <div class="container">
            <div class="row ">
                <div class="col-md-12 comp-grid">
                </div>
            </div>
        </div>
    </div>
</section>
