class Solution {
    public void reverseString(StringBuilder rev, int start, int end) {
        while(start < end) {
            char temp = rev.charAt(start);
            rev.setCharAt(start++, rev.charAt(end));
            rev.setCharAt(end--, temp);
        }
    }

    public String reverseParentheses(String s) {
        Stack<Integer> st = new Stack();
        StringBuilder sb = new StringBuilder();

        for(char ch : s.toCharArray()) {
            if(ch == '(') {
                st.push(sb.length());
            } else if(ch == ')') {
                int start = st.pop();
                reverseString(sb, start, sb.length()-1);
            } else {
                sb.append(ch);
            }
        }
        return sb.toString();
    }
}