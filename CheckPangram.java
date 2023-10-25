public class CheckPangram
{
    public static void main(String[] args) {
        String sentence="Debugging is Like Being Detective in a Crime Story";
        String result = isPangram(sentence) ? "Yes, it is Pangram" : "No, it is not a Pangram";
        System.out.println(result);
    }

    private static boolean isPangram(String sentence)
    {
        boolean[] isPangram=new boolean[26];
        int uniqueLettersCount=0;
        for (char c : sentence.toLowerCase().toCharArray())
        {
            int index=c-'a';
            if(c>='a' && c<='z')
            {
                if (!isPangram[index])
                {
                    isPangram[index]=true;
                    uniqueLettersCount++;
                }
            }
        }
        return uniqueLettersCount==26;
    }

}
