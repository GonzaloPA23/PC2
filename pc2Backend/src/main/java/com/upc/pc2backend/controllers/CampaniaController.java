package com.upc.pc2backend.controllers;

import com.upc.pc2backend.dtos.CampaniaDTO;
import com.upc.pc2backend.entities.Campania;
import com.upc.pc2backend.services.CampaniaService;
import com.upc.pc2backend.util.DTOConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api") // http://localhost:8080/api
public class CampaniaController {
    @Autowired
    private CampaniaService campaniaService;
    @Autowired
    private DTOConverter dtoConverter;

    @GetMapping("/campanias")
    public ResponseEntity<List<CampaniaDTO>> listarCampanias(){
        List<Campania> campanias = campaniaService.listarCampanias();
        List<CampaniaDTO> campaniaDTOS = campanias.stream().map(campania -> dtoConverter.convertToDto(campania, CampaniaDTO.class)).toList();
        return ResponseEntity.ok(campaniaDTOS);
    }

    @PostMapping("/campania")
    public ResponseEntity<CampaniaDTO> guardarCampania(@RequestBody CampaniaDTO campaniaDTO){
        Campania campania = dtoConverter.convertToEntity(campaniaDTO, Campania.class);
        try {
            campania = campaniaService.guardarCampania(campania);
            campaniaDTO = dtoConverter.convertToDto(campania, CampaniaDTO.class);
            return ResponseEntity.ok(campaniaDTO);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
