import java.util.Random;

public class ArrayShuffler {
    public static void shuffleArray(int[] arr) {
        Random random = new Random();
        for (int i = arr.length - 1; i >= 0; i--) {
            int j = random.nextInt(i + 1);
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7};
        shuffleArray(arr);
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}