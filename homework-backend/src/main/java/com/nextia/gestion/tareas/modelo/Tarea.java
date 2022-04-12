package com.nextia.gestion.tareas.modelo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tareas")
public class Tarea {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "tarea", length = 60, nullable = false)
	private String tarea;

	@Column(name = "descripcion", length = 60, nullable = false)
	private String descripcion;

	@Column(name = "accion", length = 60, nullable = false)
	private String accion;

	public Tarea() {

	}

	public Tarea(Long id, String tarea, String descripcion, String accion) {
		super();
		this.id = id;
		this.tarea = tarea;
		this.descripcion = descripcion;
		this.accion = accion;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTarea() {
		return tarea;
	}

	public void setTarea(String tarea) {
		this.tarea = tarea;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public String getAccion() {
		return accion;
	}

	public void setAccion(String accion) {
		this.accion = accion;
	}


}
