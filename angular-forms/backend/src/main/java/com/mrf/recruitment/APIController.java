package com.mrf.militaryrecruitmentform;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class APIController {
	
	
	@Autowired
	private JdbcTemplate jdbcTemplate;

	@CrossOrigin(origins="http://localhost:4200")
	@RequestMapping(path="/create-application", method=RequestMethod.POST)
	public boolean createApplication(
			@RequestBody MRApplication app
	) {
		jdbcTemplate.update("insert into applications(name, age, center, gender, date_of_exam, height, email) values (?,?,?,?,?,?,?)",
					app.getName(),
					app.getAge(),
					app.getCenter(),
					app.getGender(),
					app.getBookingDate(),
					app.getHeight(),
					app.getEmail()
		);
		return true;
	}
	
	
	@CrossOrigin(origins="http://localhost:4200")
	@RequestMapping(path="/", method=RequestMethod.GET)
	public List<Map<String, Object>> ids(){
		return jdbcTemplate.queryForList("select * from applications");
	}
	
	
}
