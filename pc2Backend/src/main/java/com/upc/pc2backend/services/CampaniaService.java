package com.upc.pc2backend.services;

import com.upc.pc2backend.entities.Campania;
import com.upc.pc2backend.repositories.CampaniaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CampaniaService {
    @Autowired
    private CampaniaRepository campaniaRepository;

    public List<Campania> listarCampanias(){
        return campaniaRepository.findAll();
    }

    public Campania guardarCampania(Campania campania){
        return campaniaRepository.save(campania);
    }
}
