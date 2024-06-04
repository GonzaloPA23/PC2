package com.upc.pc2backend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "campanias")
public class Campania {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_campania", nullable = false)
    private Long idCampania;
    
    @Column(name = "nombre", nullable = false)
    private String nombre;
    
    @Column(name = "objetivo", nullable = false)
    private String objetivo;
    
    @Column(name = "fecha_inicio", nullable = false)
    private LocalDate fechaInicio;
    
    @Column(name = "fecha_fin", nullable = false)
    private LocalDate fechaFin;
    
    @Column(name = "presupuesto", nullable = false)
    private float presupuesto;
    
    @Column(name = "medio_comunicacion", nullable = false)
    private String medioComunicacion;
}
