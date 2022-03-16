package com.project.soft.tienda.model;

public class DetalleVentas {
	private Integer cantidadproducto;
	private Integer codigoproducto;
	private double valortotal;
	private double valorventa;
	private double valoriva;
	
	public DetalleVentas(Integer cantidadproducto, Integer codigoproducto, double valortotal, double valorventa,
			double valoriva) {
		super();
		this.cantidadproducto = cantidadproducto;
		this.codigoproducto = codigoproducto;
		this.valortotal = valortotal;
		this.valorventa = valorventa;
		this.valoriva = valoriva;
	}

	public Integer getCantidadproducto() {
		return cantidadproducto;
	}

	public void setCantidadproducto(Integer cantidadproducto) {
		this.cantidadproducto = cantidadproducto;
	}

	public Integer getCodigoproducto() {
		return codigoproducto;
	}

	public void setCodigoproducto(Integer codigoproducto) {
		this.codigoproducto = codigoproducto;
	}

	public double getValortotal() {
		return valortotal;
	}

	public void setValortotal(double valortotal) {
		this.valortotal = valortotal;
	}

	public double getValorventa() {
		return valorventa;
	}

	public void setValorventa(double valorventa) {
		this.valorventa = valorventa;
	}

	public double getValoriva() {
		return valoriva;
	}

	public void setValoriva(double valoriva) {
		this.valoriva = valoriva;
	}
}
