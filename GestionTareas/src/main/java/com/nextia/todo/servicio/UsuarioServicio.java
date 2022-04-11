package com.nextia.todo.servicio;

import java.util.List;

import org.springframework.security.core.userdetails.UserDetailsService;

import com.nextia.todo.controlador.dto.UsuarioRegistroDTO;
import com.nextia.todo.modelo.Usuario;


public interface UsuarioServicio extends UserDetailsService{

	public Usuario guardar(UsuarioRegistroDTO registroDTO);
	
	public List<Usuario> listarUsuarios();
	
}
