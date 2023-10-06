const Banco = {
    agencia : "0289" ,
    conta : "0001" ,
    saldo : 9876.54 ,
    tipo : "Conta Corrente",
    MostrarSaldo : function(){
        console.log(this.saldo)
    },
    DepositarSacar : function(valor){
        this.saldo += valor
    },
    NumeroDaConta : function(){
        console.log(`Agência: ${this.agencia} conta: ${this.conta}`)
    }
}
console.log(Banco)
Banco.NumeroDaConta()
Banco.DepositarSacar(500.0)
Banco.MostrarSaldo()