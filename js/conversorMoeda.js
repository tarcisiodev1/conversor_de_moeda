// function converterReal(real, dolar) {
//   let resultado = real * dolar;
//   return resultado;
// }

// export default converterReal;
class ConversorMoeda {
  constructor(nome, valor) {
    this.nome = nome;
    this.valor = valor;
  }
  converterMoeda(valorReal) {
    const valorConvertido = this.valor * valorReal;
    return valorConvertido;
  }
}

export default ConversorMoeda;
