const image = document.getElementById('cakeimage'); // ロゴ画像

// 画像を時計回りに1回転させる
image.animate(
  // 途中の状態を表す配列
  [
    { transform: 'rotate(0deg)' }, // 開始時の状態（0度）
    { transform: 'rotate(360deg)' } // 終了時の状態（360度）
  ], 
  // タイミングに関する設定
  {
    fill: 'backwards', // 再生前後の状態（再生前、開始時の状態を適用）
    duration: 80000, // 再生時間（1000ミリ秒）
    iterations: 5,  // アニメーションの繰り返し回数（ずっと繰り返す）
  },
);


const nextimage = document.getElementById('coffeeimage'); // ロゴ画像

// 画像を時計回りに1回転させる
nextimage.animate(
  // 途中の状態を表す配列
  [
    { transform: 'translate(10px,50px)' }, // 開始時の状態（0度）
    { transform: 'bounce(360deg)' } // 終了時の状態（360度）
  ], 
  // タイミングに関する設定
  {
    fill: 'backwards', // 再生前後の状態（再生前、開始時の状態を適用）
    duration: 10000, // 再生時間（1000ミリ秒）
    iterations: 5,  // アニメーションの繰り返し回数（ずっと繰り返す）
  },
);


