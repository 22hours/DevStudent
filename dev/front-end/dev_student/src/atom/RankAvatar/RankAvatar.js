import rank1 from "img/home/rank1.png";
import rank2 from "img/home/rank2.png";
import rank3 from "img/home/rank3.png";
import rank4 from "img/home/rank4.png";
import rank5 from "img/home/rank5.png";

const RankAvatar = (rank) => {
    switch (rank) {
        case 1:
            return rank1;
        case 2:
            return rank2;
        case 3:
            return rank3;
        case 4:
            return rank4;
        case 5:
            return rank5;
        default:
            return rank;
    }
};

export default RankAvatar;
