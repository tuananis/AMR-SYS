<?php 

/**
 * SharedController Controller
 * @category  Controller / Model
 */
class SharedController extends BaseController{
	
	/**
     * tbl_billing_tbl_Meter_meter_id_option_list Model Action
     * @return array
     */
	function tbl_billing_tbl_Meter_meter_id_option_list(){
		$db = $this->GetModel();
		$sqltext = "SELECT  DISTINCT meter_id AS value,meter_id AS label FROM tbl_meter";
		$queryparams = null;
		$arr = $db->rawQuery($sqltext, $queryparams);
		return $arr;
	}

	/**
     * tbl_meter_customer_id_option_list Model Action
     * @return array
     */
	function tbl_meter_customer_id_option_list(){
		$db = $this->GetModel();
		$sqltext = "SELECT  DISTINCT customer_id AS value,customer_id AS label FROM tbl_customer";
		$queryparams = null;
		$arr = $db->rawQuery($sqltext, $queryparams);
		return $arr;
	}

	/**
     * tbl_payment_bill_id_option_list Model Action
     * @return array
     */
	function tbl_payment_bill_id_option_list(){
		$db = $this->GetModel();
		$sqltext = "SELECT  DISTINCT bill_id AS value FROM tbl_billing";
		$queryparams = null;
		$arr = $db->rawQuery($sqltext, $queryparams);
		return $arr;
	}

	/**
     * tbl_reading_meter_id_option_list Model Action
     * @return array
     */
	function tbl_reading_meter_id_option_list(){
		$db = $this->GetModel();
		$sqltext = "SELECT  DISTINCT meter_id AS value FROM tbl_meter";
		$queryparams = null;
		$arr = $db->rawQuery($sqltext, $queryparams);
		return $arr;
	}

	/**
     * tbl_user_username_value_exist Model Action
     * @return array
     */
	function tbl_user_username_value_exist($val){
		$db = $this->GetModel();
		$db->where("username", $val);
		$exist = $db->has("tbl_user");
		return $exist;
	}

	/**
     * tbl_user_email_value_exist Model Action
     * @return array
     */
	function tbl_user_email_value_exist($val){
		$db = $this->GetModel();
		$db->where("email", $val);
		$exist = $db->has("tbl_user");
		return $exist;
	}

	/**
     * getcount_totalrevenue Model Action
     * @return Value
     */
	function getcount_totalrevenue(){
		$db = $this->GetModel();
		$sqltext = "SELECT  SUM(tb.total_amount) AS sum_of_total_amount, tb.bill_status FROM tbl_billing AS tb WHERE  (tb.bill_status  ='Paid' ) GROUP BY tb.bill_status";
		$queryparams = null;
		$val = $db->rawQueryValue($sqltext, $queryparams);
		
		if(is_array($val)){
			return $val[0];
		}
		return $val;
	}

	/**
     * getcount_totalunpaid Model Action
     * @return Value
     */
	function getcount_totalunpaid(){
		$db = $this->GetModel();
		$sqltext = "SELECT  SUM(tb.total_amount) AS sum_of_total_amount, tb.bill_status FROM tbl_billing AS tb WHERE  (tb.bill_status  ='Unpaid' ) GROUP BY tb.bill_status";
		$queryparams = null;
		$val = $db->rawQueryValue($sqltext, $queryparams);
		
		if(is_array($val)){
			return $val[0];
		}
		return $val;
	}

	/**
	* piechart_totalrevenuevsreceive Model Action
	* @return array
	*/
	function piechart_totalrevenuevsreceive(){
		
		$db = $this->GetModel();
		$chart_data = array(
			"labels"=> array(),
			"datasets"=> array(),
		);
		
		//set query result for dataset 1
		$sqltext = "SELECT  SUM(tb.total_amount) AS sum_of_total_amount, tb.bill_status FROM tbl_billing AS tb GROUP BY tb.bill_status";
		$queryparams = null;
		$dataset1 = $db->rawQuery($sqltext, $queryparams);
		$dataset_data =  array_column($dataset1, 'sum_of_total_amount');
		$dataset_labels =  array_column($dataset1, 'bill_status');
		$chart_data["labels"] = array_unique(array_merge($chart_data["labels"], $dataset_labels));
		$chart_data["datasets"][] = $dataset_data;

		return $chart_data;
	}

	/**
     * tbl_customer_tbl_customercity_option_list Model Action
     * @return array
     */
	function tbl_customer_tbl_customercity_option_list(){
		$db = $this->GetModel();
		$sqltext = "SELECT  DISTINCT city AS value,city AS label FROM tbl_customer";
		$queryparams = null;
		$arr = $db->rawQuery($sqltext, $queryparams);
		return $arr;
	}

	/**
     * getcount_totalcustomers Model Action
     * @return Value
     */
	function getcount_totalcustomers(){
		$db = $this->GetModel();
		$sqltext = "SELECT COUNT(*) AS num FROM tbl_customer";
		$queryparams = null;
		$val = $db->rawQueryValue($sqltext, $queryparams);
		
		if(is_array($val)){
			return $val[0];
		}
		return $val;
	}

	/**
	* barchart_custmersbycity Model Action
	* @return array
	*/
	function barchart_custmersbycity(){
		
		$db = $this->GetModel();
		$chart_data = array(
			"labels"=> array(),
			"datasets"=> array(),
		);
		
		//set query result for dataset 1
		$sqltext = "SELECT  COUNT(tc.customer_id) AS count_of_customer_id, tc.city FROM tbl_customer AS tc GROUP BY tc.city";
		$queryparams = null;
		$dataset1 = $db->rawQuery($sqltext, $queryparams);
		$dataset_data =  array_column($dataset1, 'count_of_customer_id');
		$dataset_labels =  array_column($dataset1, 'city');
		$chart_data["labels"] = array_unique(array_merge($chart_data["labels"], $dataset_labels));
		$chart_data["datasets"][] = $dataset_data;

		return $chart_data;
	}

	/**
     * tbl_meter_tbl_metermeter_type_option_list Model Action
     * @return array
     */
	function tbl_meter_tbl_metermeter_type_option_list(){
		$db = $this->GetModel();
		$sqltext = "SELECT  DISTINCT meter_type AS value,meter_type AS label FROM tbl_meter";
		$queryparams = null;
		$arr = $db->rawQuery($sqltext, $queryparams);
		return $arr;
	}

	/**
	* barchart_totalmetersbytype Model Action
	* @return array
	*/
	function barchart_totalmetersbytype(){
		
		$db = $this->GetModel();
		$chart_data = array(
			"labels"=> array(),
			"datasets"=> array(),
		);
		
		//set query result for dataset 1
		$sqltext = "SELECT  COUNT(tm.meter_id) AS count_of_meter_id, tm.meter_type FROM tbl_meter AS tm GROUP BY tm.meter_type";
		$queryparams = null;
		$dataset1 = $db->rawQuery($sqltext, $queryparams);
		$dataset_data =  array_column($dataset1, 'count_of_meter_id');
		$dataset_labels =  array_column($dataset1, 'meter_type');
		$chart_data["labels"] = array_unique(array_merge($chart_data["labels"], $dataset_labels));
		$chart_data["datasets"][] = $dataset_data;

		return $chart_data;
	}

	/**
	* barchart_totalmetersbystatus Model Action
	* @return array
	*/
	function barchart_totalmetersbystatus(){
		
		$db = $this->GetModel();
		$chart_data = array(
			"labels"=> array(),
			"datasets"=> array(),
		);
		
		//set query result for dataset 1
		$sqltext = "SELECT  COUNT(tm.meter_id) AS count_of_meter_id, tm.meter_status FROM tbl_meter AS tm GROUP BY tm.meter_status";
		$queryparams = null;
		$dataset1 = $db->rawQuery($sqltext, $queryparams);
		$dataset_data =  array_column($dataset1, 'count_of_meter_id');
		$dataset_labels =  array_column($dataset1, 'meter_status');
		$chart_data["labels"] = array_unique(array_merge($chart_data["labels"], $dataset_labels));
		$chart_data["datasets"][] = $dataset_data;

		return $chart_data;
	}

	/**
     * getcount_totalelectricityconsumption1unit1000kwh Model Action
     * @return Value
     */
	function getcount_totalelectricityconsumption1unit1000kwh(){
		$db = $this->GetModel();
		$sqltext = "SELECT  v.expr1 FROM vwreading AS v WHERE  (v.meter_type  ='Electricity' )";
		$queryparams = null;
		$val = $db->rawQueryValue($sqltext, $queryparams);
		
		if(is_array($val)){
			return $val[0];
		}
		return $val;
	}

	/**
     * getcount_totalwaterconsumption1unit1000ltr Model Action
     * @return Value
     */
	function getcount_totalwaterconsumption1unit1000ltr(){
		$db = $this->GetModel();
		$sqltext = "SELECT  v.expr1 FROM vwreading AS v WHERE  (v.meter_type  ='Water' )";
		$queryparams = null;
		$val = $db->rawQueryValue($sqltext, $queryparams);
		
		if(is_array($val)){
			return $val[0];
		}
		return $val;
	}

}
