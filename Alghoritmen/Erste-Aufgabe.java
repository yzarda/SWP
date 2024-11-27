import java.util.Scanner;

public class SchriftlicheAddition {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        
        System.out.print("Gib die erste Zahl ein: ");
        String zahl1 = scanner.nextLine();

        System.out.print("Gib die zweite Zahl ein: ");
        String zahl2 = scanner.nextLine();

     
        String ergebnis = schriftlicheAddition(zahl1, zahl2);

    
        System.out.println("Die Summe der Zahlen ist: " + ergebnis);
    }

}