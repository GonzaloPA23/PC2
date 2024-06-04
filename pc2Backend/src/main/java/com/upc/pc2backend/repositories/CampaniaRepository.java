package com.upc.pc2backend.repositories;

import com.upc.pc2backend.entities.Campania;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CampaniaRepository extends JpaRepository<Campania, Long> {
}
