import java.util.Scanner;

/**
 * construction
 */
public class construction {
    public static class Node {
        int data;
        Node next;
    }
    public static class LinkedList {
        Node head;
        Node tail;
        int size;
    }
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        
        LinkedList list = new LinkedList();
        scn.close();
    }
}
