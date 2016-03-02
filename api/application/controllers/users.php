<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Users extends CI_Controller {
	public function __construct()
	{
		header("Access-Control-Allow-Origin: *");
		header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
		parent::__construct();
		$this->load->model('m_users');
	}

	public function get()
	{
		$id = $this->input->get('UserId');
		$qry = $this->m_users->get($id);

		if ($qry->num_rows()) {
			$this
				->output
	        	->set_status_header(200)
	        	->set_content_type('application/json', 'utf-8')
	        	->set_output(json_encode($qry->result(), JSON_NUMERIC_CHECK));
		} else {
			$this
				->output
	        	->set_status_header(204)
	        	->set_content_type('application/json', 'utf-8')
	        	->set_output(json_encode($this->db->queries, JSON_NUMERIC_CHECK));			
		}
	}

	public function add()
	{
		$obj = $this->input->post();
		$add = $this->m_users->add($obj);

		if ($add) {
			$this
				->output
	        	->set_status_header(200)
	        	->set_content_type('application/json', 'utf-8')
	        	->set_output(json_encode('Ok', JSON_NUMERIC_CHECK));
		} else {
			$this
				->output
	        	->set_status_header(204)
	        	->set_content_type('application/json', 'utf-8')
	        	->set_output(json_encode($add, JSON_NUMERIC_CHECK));					
		}
	}

	public function edit()
	{
		$obj = $this->input->post();
		$edit = $this->m_users->edit($obj);

		if ($edit) {
			$this
				->output
	        	->set_status_header(200)
	        	->set_content_type('application/json', 'utf-8')
	        	->set_output(json_encode('Ok', JSON_NUMERIC_CHECK));
		} else {
			$this
				->output
	        	->set_status_header(204)
	        	->set_content_type('application/json', 'utf-8')
	        	->set_output(json_encode($edit, JSON_NUMERIC_CHECK));					
		}
	}	

	public function remove()
	{
		$obj = $this->input->post();
		$remove = $this->m_users->remove($obj);

		if ($remove) {
			$this
				->output
	        	->set_status_header(200)
	        	->set_content_type('application/json', 'utf-8')
	        	->set_output(json_encode('Ok', JSON_NUMERIC_CHECK));
		} else {
			$this
				->output
	        	->set_status_header(204)
	        	->set_content_type('application/json', 'utf-8')
	        	->set_output(json_encode($remove, JSON_NUMERIC_CHECK));					
		}
	}


}

/* End of file users.php */
/* Location: ./application/controllers/users.php */