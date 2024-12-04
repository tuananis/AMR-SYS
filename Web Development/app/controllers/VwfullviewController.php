<?php 
/**
 * Vwfullview Page Controller
 * @category  Controller
 */
class VwfullviewController extends SecureController{
	function __construct(){
		parent::__construct();
		$this->tablename = "vwFullView";
	}
	/**
     * Custom list page
     * @return BaseView
     */
	function index(){
		$request = $this->request;
		$db = $this->GetModel();
		$pagination = null;
		$sqltext = "SELECT SQL_CALC_FOUND_ROWS   tc.customer_id, tc.first_name, tc.last_name, tc.address, tc.city, tc.phone_number, tc.date_deleted, tc.is_deleted, tm.meter_id, tm.customer_id, tm.meter_type, tm.serial_number, tm.installation_date, tm.status, tm.date_deleted, tm.is_deleted, tb.bill_id, tb.billing_period_start, tb.billing_period_end, tb.total_amount, tb.due_date, tb.status, tb.tbl_Meter_meter_id, tb.date_deleted, tb.is_deleted, tr.reading_id, tr.meter_id, tr.reading_date, tr.value, tr.date_deleted, tr.is_deleted, tp.payment_id, tp.bill_id, tp.payment_date, tp.amount, tp.date_deleted, tp.is_deleted FROM tbl_customer AS tc JOIN tbl_meter AS tm ON tc.customer_id=tm.customer_id  JOIN tbl_billing AS tb ON tm.meter_id=tb.tbl_Meter_meter_id  JOIN tbl_reading AS tr ON tm.meter_id=tr.meter_id  JOIN tbl_payment AS tp ON tb.bill_id=tp.bill_id";
		$queryparams = null;
		if(!empty($request->orderby)){
			$orderby = $request->orderby;
			$ordertype = (!empty($request->ordertype) ? $request->ordertype : ORDER_TYPE);
			$db->orderBy($orderby, $ordertype);
		}
		else{
			$db->orderBy("customer_id", ORDER_TYPE);
		}
		$pagination = $this->get_pagination(MAX_RECORD_COUNT); //Get sql limit from url if not set on the sql command text
		$tc = $db->withTotalCount();
		$records = $db->query($sqltext, $pagination, $queryparams);
		$records_count = count($records);
		$total_records = intval($tc->totalCount);
		$page_limit = (!empty($pagination) ? $pagination[1] : 1);
		$total_pages = ceil($total_records / $page_limit);
		$data = new stdClass;
		$data->records = $records;
		$data->record_count = $records_count;
		$data->total_records = $total_records;
		$data->total_page = $total_pages;
		if($db->getLastError()){
			$this->set_page_error();
		}
		$page_title = $this->view->page_title = "Vwfullview";
		$this->view->report_filename = date('Y-m-d') . '-' . $page_title;
		$this->view->report_title = $page_title;
		$this->view->report_layout = "report_layout.php";
		$this->view->report_paper_size = "A4";
		$this->view->report_orientation = "portrait";
		$this->render_view("vwfullview/list.php", $data); //render the full page
	}
}
