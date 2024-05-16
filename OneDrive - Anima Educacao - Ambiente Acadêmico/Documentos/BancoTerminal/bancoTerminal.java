public class bancoTerminal {

  // Método para realizar o saque
  public static double realizarSaque(double saldo, double valorSolicitado) {
    if (saldo >= valorSolicitado) {
      saldo -= valorSolicitado;
      System.out.println("Saque realizado com sucesso.");
    } else {
      System.out.println("Saldo insuficiente.");
    }
    return saldo;
  }

  // Método para exibir o saldo
  public static void exibirSaldo(double saldo) {
    System.out.println("Saldo atual: " + saldo);
  }

  public static void main(String[] args) {
    // Primeiro caso: saldo inicial 25, valor solicitado 18
    double saldo1 = 25.0;
    double valorSolicitado1 = 18.0;
    System.out.println("Primeiro caso:");
    saldo1 = realizarSaque(saldo1, valorSolicitado1);
    exibirSaldo(saldo1);

    // Segundo caso: saldo inicial 15, valor solicitado 22
    double saldo2 = 15.0;
    double valorSolicitado2 = 22.0;
    System.out.println("Segundo caso:");
    saldo2 = realizarSaque(saldo2, valorSolicitado2);
    exibirSaldo(saldo2);
  }
}
