package com.example.historicbadasses.service;

import com.example.historicbadasses.model.HistoricalPerson;
import com.example.historicbadasses.repository.HistoricalPersonRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Random;

@Service
public class HistoricalPersonService {
    private final HistoricalPersonRepository repository;

    private HistoricalPerson lastPerson;
    private LocalDate lastDate = LocalDate.now().minusDays(1);

    public HistoricalPersonService(HistoricalPersonRepository repository) {
        this.repository = repository;
    }

    public HistoricalPerson getDailyPerson() {
        if (!lastDate.equals(LocalDate.now())) {
            long count = repository.count();
            if (count == 0) {
                throw new IllegalStateException("No historical persons available in the database.");
            }
            int randomIndex = new Random().nextInt((int) count);
            lastPerson = repository.findByOffset(randomIndex).orElseThrow(() ->
                    new IllegalStateException("Random person not found despite valid index."));
            lastDate = LocalDate.now();
        }
        return lastPerson;
    }
}


