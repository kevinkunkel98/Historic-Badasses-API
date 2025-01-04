package com.example.historicbadasses.repository;

import com.example.historicbadasses.model.HistoricalPerson;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface HistoricalPersonRepository extends JpaRepository<HistoricalPerson, Long> {

    // Method to fetch a single random HistoricalPerson using native SQL
    @Query(value = "SELECT * FROM historical_person ORDER BY RAND() LIMIT 1", nativeQuery = true)
    Optional<HistoricalPerson> findRandomPersonNative();

    // Alternative: Method to fetch by offset for random selection (useful for large datasets)
    @Query(value = "SELECT * FROM historical_person LIMIT 1 OFFSET :offset", nativeQuery = true)
    Optional<HistoricalPerson> findByOffset(@Param("offset") int offset);
}
