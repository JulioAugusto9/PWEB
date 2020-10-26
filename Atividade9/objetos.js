function Retangulo(x, y) {
    this.base = x;
    this.altura = y;

    this.calcularArea = () => {
        return this.base * this.altura;
    };
}

let ret = new Retangulo(3, 4);
alert("Área do retângulo: " + ret.calcularArea());

function Conta() {
    let nome, numero, saldo, banco;
    this.getNome = () => {
        return nome;
    }
    this.setNome = (n) => {
        nome = n;
    }
    this.getNumero = () => {
        return numero;
    }
    this.setNumero = (n) => {
        numero = n;
    }
    this.getSaldo = () => {
        return saldo;
    }
    this.setSaldo = (s) => {
        saldo = s;
    }
    this.getBanco = () => {
        return banco;
    }
    this.setBanco = (b) => {
        banco = b;
    }
}

function Corrente() {
    let saldoEspecial;

    this.getSaldoEspecial = () => {
        return saldoEspecial;
    }
    this.setSaldoEspecial = (se) => {
        saldoEspecial = se;
    }
}

function Poupanca() {
    let juros, dataVencimento;

    this.getJuros = () => {
        return juros;
    }
    this.setJuros = (j) => {
        juros = j;
    }
    this.getDataVencimento = () => {
        return dataVencimento;
    }
    this.setDataVencimento = (dv) => {
        dataVencimento = dv;
    }
}

Corrente.prototype = new Conta();
Poupanca.prototype = new Conta();

let cor = new Corrente();
cor.setNome("José");
cor.setNumero(123);
cor.setSaldo(30.48);
cor.setBanco("Itaú");
cor.setSaldoEspecial(100.00);

let pou = new Poupanca();
pou.setNome("Maria");
pou.setNumero(456);
pou.setSaldo(897.30);
pou.setBanco("Bradesco");
pou.setJuros(1.2);
pou.setDataVencimento("16/10/2022");

let msg = "Informações da conta corrente: " + "\n" +
        "Nome: " + cor.getNome() + "\n" +
        "Número: " + cor.getNumero() + "\n" +
        "Saldo: R$ " + cor.getSaldo() + "\n" +
        "Banco: " + cor.getBanco() + "\n" +
        "Saldo Especial: R$ " + cor.getSaldoEspecial();
alert(msg);

msg = "Informações da conta poupança: " + "\n" +
        "Nome: " + pou.getNome() + "\n" +
        "Número: " + pou.getNumero() + "\n" +
        "Saldo: R$ " + pou.getSaldo() + "\n" +
        "Banco: " + pou.getBanco() + "\n" +
        "Juros: " + pou.getJuros() + "%\n" +
        "Data de Vencimento: " + pou.getDataVencimento();
alert(msg);
