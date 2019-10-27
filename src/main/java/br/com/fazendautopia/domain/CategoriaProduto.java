package br.com.fazendautopia.domain;

import javax.persistence.Column;
import javax.persistence.Entity;

@SuppressWarnings("serial")
@Entity
public class CategoriaProduto extends GenericDomain {
	
	@Column(length = 33, nullable = false)
	private String descricao;
	private boolean status;

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "CategoriaProduto [descricao=" + descricao + ", status=" + status + "]";
	}
}
