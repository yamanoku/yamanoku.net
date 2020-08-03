__NUXT_JSONP__("/archive/i-think-commit-message_and_commit-granularity", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return {data:[{page:{title:"コミットメッセージとコミットの粒度について思ったこと",description:"コミットメッセージとコミットの粒度",date:"2017-08-07T00:00:00.000Z",author:"yamanoku",toc:[{id:e,depth:i,text:e},{id:f,depth:i,text:f}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{href:"https:\u002F\u002Fmedium.com\u002F@risacan\u002F%E3%82%B3%E3%83%9F%E3%83%83%E3%83%88%E3%83%A1%E3%83%83%E3%82%BB%E3%83%BC%E3%82%B8%E3%81%AE%E6%9B%B8%E3%81%8D%E6%96%B9-64aeadd92057",rel:["noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"コミットメッセージの書き方 - risacan - Medium"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"見た。以下感想。"}]},{type:a,value:c},{type:b,tag:p,props:{id:e},children:[{type:b,tag:g,props:{href:"#%E6%80%9D%E3%81%A3%E3%81%9F%E3%81%93%E3%81%A8",ariaHidden:j,tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:e}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"コミットメッセージが結構雑になる問題ってのは、自分が考える中としてコミットの粒度が割とデカい場合になるんじゃないかなと思ってる。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"例えば数ページマークアップしたときに、ページごとにコミットを切るよりかは、全ページの作業をコミットさせておく方が分かりやすいし、どこまでの進捗なのかも一見しやすいかなと思う。もちろんページ内で機能が複雑化している場合はその限りではないと思うけど。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"なので"},{type:b,tag:o,props:{},children:[{type:a,value:"コミットのメッセージを分かりやすく書く"}]},{type:a,value:"、ということと同時に"},{type:b,tag:o,props:{},children:[{type:a,value:"コミットの粒度をどれほどのものにするか"}]},{type:a,value:"、という意識と進め方を持たないとこの辺はなりたたないのではないかなーと個人的に感じている。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"基本業務の流れとして、バグや機能追加の課題が振られてそれらを対応完了するまでを１コミットとしているけど、LPなどページ単位で対応するときは、場合によっては、１ページ単位でコミットを切ることがある。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"あと良くない癖なので直さなきゃなんだけど、その日に対応する修正もまとめて対応して「00\u002F00対応分修正コミット」とかで切って細かく書かなかったりもする。修正範囲の意義を全体的なものとして捉えていると、修正する１機能というよりかはそれに付随するもとしてまとめて対応しないと、という意識になっちゃうのでその辺は進行管理とも付随する問題かなと感じる。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"この辺の粒度対策としては、ブランチをいかに細かく切って作業するかにかかってるんじゃないかと思うので手を動かす前にまずブランチ切っとけ、終わったらマージしとけを工程の中に入れておかんと危ないなとは感じた。まあもし単位がデカくなってもやり直しが一応できるのがGitの良いところではあるけど、出来る限りそういう修正はしたくないよね、と。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"課題の建て方としてもそうだけど個人としては、もう少し部品化・機能化するイメージで進めてみてもいいかなと感じた。この辺は実験として新規のプロジェクトとか、個人がメインで動いていたプロジェクトにもっかいアサインしたら試してみようかなと思ってる。誰かとやるんであればその時のルールには従います。"}]},{type:a,value:c},{type:b,tag:p,props:{id:f},children:[{type:b,tag:g,props:{href:"#%E4%BD%99%E8%AB%87",ariaHidden:j,tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:f}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"昔、コミットの内容なんか見なくてもファイルの内容みればどうなったか分かるだろみたいな言説を聞いて、当時はまあそうだよなと思ったけど、結局属人性を加速させかねない危険な発言だったと徐々に分かってきて、１回限りではない・他人の手にも渡るリポジトリ内では、出来る限りは詳細的に書くように努めたいと思ってる。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"こちらからは以上です。"}]}]},dir:"\u002Farchive",path:"\u002Farchive\u002Fi-think-commit-message_and_commit-granularity",extension:".md",slug:"i-think-commit-message_and_commit-granularity",createdAt:h,updatedAt:h}}],fetch:[],mutations:[]}}("text","element","\n","p","思ったこと","余談","a","2020-08-03T14:33:30.455Z",2,"true",-1,"span","icon","icon-link","b","h2")));