package com.upc.pc2backend.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CampaniaDTO {
    private Long idCampania;
    private String nombre;
    private String objetivo;
    private LocalDate fechaInicio;
    private LocalDate fechaFin;
    private float presupuesto;
    private String medioComunicacion;
}
