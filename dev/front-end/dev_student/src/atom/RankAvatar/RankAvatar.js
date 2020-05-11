import rank1 from "img/home/rank1.png";
import rank2 from "img/home/rank2.png";
import rank3 from "img/home/rank3.png";

const RankAvatar = (rank) => {
    switch (rank) {
        case 1:
            return rank1;
        case 2:
            return rank2;
        case 3:
            return rank3;
        default:
            return rank;
    }
};

export default RankAvatar;
