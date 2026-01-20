function topThreeWords(text) {
    
    const textNormalized = text.trim().replaceAll().split(' ').map((word) => word.toLowerCase());
    // const justWords = textNormalized.map((word) => )
    console.log(textNormalized);
}

topThreeWords("  //wont won't won't")