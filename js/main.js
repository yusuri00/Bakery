$('body').vegas({
  overlay: true,
  transition: 'flash',
  transitionDuration: 2000,
  delay: 10000,
  animation: 'random',
  animationDuration: 20000,
  slides: [
        { src: "../img/sitemain.jpg" }, // 背景画像1枚目
        { src: "../img/sitemain2.jpg" }, // 背景画像2枚目
        { src: "../img/sitemain3.jpg" }, // 背景画像3枚目
    ]
  });
