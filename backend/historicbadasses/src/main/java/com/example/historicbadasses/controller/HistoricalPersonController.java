package com.example.historicbadasses.controller;

import com.example.historicbadasses.model.HistoricalPerson;
import com.example.historicbadasses.service.HistoricalPersonService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/historical-person")
public class HistoricalPersonController {
    private final HistoricalPersonService service;

    public HistoricalPersonController(HistoricalPersonService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<HistoricalPerson> getPerson() {
        return ResponseEntity.ok(service.getDailyPerson());
    }
}
