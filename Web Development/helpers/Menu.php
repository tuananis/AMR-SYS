<?php
/**
 * Menu Items
 * All Project Menu
 * @category  Menu List
 */

class Menu{
	
	
			public static $navbartopleft = array(
		array(
			'path' => 'home', 
			'label' => 'Home', 
			'icon' => ''
		),
		
		array(
			'path' => 'tbl_customer', 
			'label' => 'Customer', 
			'icon' => '','submenu' => array(
		array(
			'path' => 'tbl_customer/Index', 
			'label' => 'Customer', 
			'icon' => ''
		),
		
		array(
			'path' => 'tbl_customer/report', 
			'label' => 'Report', 
			'icon' => ''
		)
	)
		),
		
		array(
			'path' => 'tbl_meter', 
			'label' => 'Meter', 
			'icon' => '','submenu' => array(
		array(
			'path' => 'tbl_meter/Index', 
			'label' => 'Meter', 
			'icon' => ''
		),
		
		array(
			'path' => 'tbl_meter/report', 
			'label' => 'Report', 
			'icon' => ''
		)
	)
		),
		
		array(
			'path' => 'tbl_billing', 
			'label' => 'Billing', 
			'icon' => '','submenu' => array(
		array(
			'path' => 'tbl_billing/Index', 
			'label' => 'Billing', 
			'icon' => ''
		),
		
		array(
			'path' => 'tbl_billing/report', 
			'label' => 'Report', 
			'icon' => ''
		)
	)
		),
		
		array(
			'path' => 'tbl_reading', 
			'label' => 'Meter Reading', 
			'icon' => '','submenu' => array(
		array(
			'path' => 'tbl_reading/Index', 
			'label' => 'Meter Reading', 
			'icon' => ''
		),
		
		array(
			'path' => 'tbl_reading/report', 
			'label' => 'Report', 
			'icon' => ''
		)
	)
		),
		
		array(
			'path' => 'tbl_payment', 
			'label' => 'Payment', 
			'icon' => ''
		),
		
		array(
			'path' => 'tbl_user', 
			'label' => 'User', 
			'icon' => ''
		)
	);
		
	
	
			public static $city = array(
		array(
			"value" => "Colombo", 
			"label" => "Colombo", 
		),
		array(
			"value" => "Mount Lavinia", 
			"label" => "Mount Lavinia", 
		),
		array(
			"value" => "Kesbewa", 
			"label" => "Kesbewa", 
		),
		array(
			"value" => "Maharagama", 
			"label" => "Maharagama", 
		),
		array(
			"value" => "Moratuwa", 
			"label" => "Moratuwa", 
		),
		array(
			"value" => "Ratnapura", 
			"label" => "Ratnapura", 
		),
		array(
			"value" => "Negombo", 
			"label" => "Negombo", 
		),
		array(
			"value" => "Kandy", 
			"label" => "Kandy", 
		),
		array(
			"value" => "Sri Jayewardenepura Kotte", 
			"label" => "Sri Jayewardenepura Kotte", 
		),
		array(
			"value" => "Kalmunai", 
			"label" => "Kalmunai", 
		),
		array(
			"value" => "Trincomalee", 
			"label" => "Trincomalee", 
		),
		array(
			"value" => "Galle", 
			"label" => "Galle", 
		),
		array(
			"value" => "Jaffna", 
			"label" => "Jaffna", 
		),
		array(
			"value" => "Athurugiriya", 
			"label" => "Athurugiriya", 
		),
		array(
			"value" => "Weligama", 
			"label" => "Weligama", 
		),
		array(
			"value" => "Matara", 
			"label" => "Matara", 
		),
		array(
			"value" => "Kolonnawa", 
			"label" => "Kolonnawa", 
		),
		array(
			"value" => "Gampaha", 
			"label" => "Gampaha", 
		),
		array(
			"value" => "Puttalam", 
			"label" => "Puttalam", 
		),
		array(
			"value" => "Badulla", 
			"label" => "Badulla", 
		),
		array(
			"value" => "Kalutara", 
			"label" => "Kalutara", 
		),
		array(
			"value" => "Bentota", 
			"label" => "Bentota", 
		),
		array(
			"value" => "Mannar", 
			"label" => "Mannar", 
		),
		array(
			"value" => "Kurunegala", 
			"label" => "Kurunegala", 
		),);
		
			public static $meter_type = array(
		array(
			"value" => "Electricity", 
			"label" => "Electricity", 
		),
		array(
			"value" => "Water", 
			"label" => "Water", 
		),);
		
			public static $account_status = array(
		array(
			"value" => "Active", 
			"label" => "Active", 
		),
		array(
			"value" => "Pending", 
			"label" => "Pending", 
		),
		array(
			"value" => "Blocked", 
			"label" => "Blocked", 
		),);
		
			public static $role = array(
		array(
			"value" => "Admin", 
			"label" => "Admin", 
		),
		array(
			"value" => "Customer", 
			"label" => "Customer", 
		),
		array(
			"value" => "Reader", 
			"label" => "Reader", 
		),
		array(
			"value" => "Finance", 
			"label" => "Finance", 
		),);
		
}