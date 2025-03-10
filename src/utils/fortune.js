export const getFortune = () => {
  const fortunes = [
    {
      text: '今日は特別な日となりそうです。普段気づかなかった小さな幸せに目を向けることで、新たな発見があるでしょう。周りの人々との関係も深まり、心温まる出来事が待っています。直感を信じて行動することで、思いがけない良い結果につながるはずです。',
      score: 5,
      advice: '新しいことに挑戦するのに最適な日です。思い切った行動を取ってみましょう。',
      luckyItem: 'お気に入りのアクセサリー'
    },
    {
      text: '変化の兆しが見える一日です。普段とは異なる視点で物事を見ることで、新たなチャンスが見えてくるでしょう。人との出会いを大切にすることで、将来につながる貴重な機会が訪れます。柔軟な姿勢を保つことが、今日のカギとなりそうです。',
      score: 4,
      advice: '周囲の変化に敏感になり、チャンスを逃さないようにしましょう。',
      luckyItem: 'メモ帳'
    },
    {
      text: '内なる声に耳を傾けるべき日です。静かな環境で自分と向き合うことで、大切な気づきが得られるでしょう。長年抱えていた課題への解決の糸口も見つかりそうです。自分を信じる気持ちが、今日のあなたを導いてくれます。',
      score: 3,
      advice: '決断を急がず、十分に考えてから行動に移すことが大切です。',
      luckyItem: '腕時計'
    },
    {
      text: '人との縁が特に強く感じられる一日です。思いがけない場所で素晴らしい出会いがあるかもしれません。普段接点のない分野の人との交流が、新たな視野を広げるきっかけとなるでしょう。積極的なコミュニケーションが吉となります。',
      score: 4,
      advice: '友人との約束や集まりを積極的に計画しましょう。新しい出会いもあるかもしれません。',
      luckyItem: 'お気に入りの服'
    },
    {
      text: '創造性が特に高まる日となっています。芸術的な活動や新しいプロジェクトの立ち上げに最適な時期です。普段とは異なるアプローチを試してみることで、素晴らしいアイデアが生まれるでしょう。直感的なひらめきを大切にしてください。',
      score: 5,
      advice: 'アイデアをメモしたり、創作活動に時間を使ったりするのが良いでしょう。',
      luckyItem: 'カラフルなペン'
    }
  ];
  return fortunes[Math.floor(Math.random() * fortunes.length)];
};