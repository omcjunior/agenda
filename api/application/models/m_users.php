<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class M_users extends CI_Model {

	public function __construct()
	{
		parent::__construct();
	}

	public function get($id = null)
	{
		if ($id) {
			$this->db->where('UserId', $id);
		}

		return $this->db->get('Users');
	}

	public function add($obj)
	{
		return $this->db->insert('Users', $obj);
	}

	public function edit($obj)
	{
		return $this->db->where('UserId', $obj['UserId'])
				 		->update('Users', $obj);
	}

	public function remove($obj)
	{
		return $this->db->where('UserId', $obj['UserId'])
						->delete('Users');
	}
	

}

/* End of file m_users.php */
/* Location: ./application/models/m_users.php */