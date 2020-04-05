import java.util.ArrayList;
import java.util.HashMap;
import java.util.Scanner;

/**
 * test1463
 */
public class test1463 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        HashMap<Integer, Integer> dp_table = new HashMap<Integer, Integer>();
        dp_table.put(1, 0);

        ArrayList<Integer> a = new ArrayList<Integer>();
        a.add(1);

        while (true) {
            ArrayList<Integer> next = new ArrayList<Integer>();
            // 요청 값이 있는지 확인하여 출력
            if (dp_table.get(n) != null) {
                System.out.println(dp_table.get(n));
                break;
            }

            // 없으면 다음 값 만들기
            for (int i : a) {
                // 시작점에서 가능한 값들 넣기
                int[] gen = { i + 1, i * 2, i * 3 };

                // 가능한 값들을 count와 함께 hashmap에 넣기
                for (int k : gen) {
                    // 제한 사항
                    if (k > 1000000)
                        continue;
                    if (dp_table.get(k) == null) {
                        dp_table.put(k, dp_table.get(i) + 1);
                        next.add(k);
                    }
                }
            }
            // a는 시작점
            a = next;
        }
        sc.close();
    }
}