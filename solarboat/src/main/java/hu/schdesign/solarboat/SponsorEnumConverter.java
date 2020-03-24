package hu.schdesign.solarboat;

import hu.schdesign.solarboat.model.SponsorGroup;

import javax.persistence.AttributeConverter;
import javax.persistence.Convert;

@Convert
public class SponsorEnumConverter implements AttributeConverter<SponsorGroup, String> {
    @Override
    public String convertToDatabaseColumn(SponsorGroup sg){
        if(sg == null)
            return null;
        switch (sg) {
            case MAIN:
                return "MAIN";

            case TOP:
                return "TOP";

            case OTHER:
                return "OTHER";

            case PARTNER:
                return "PARTNER";

            case UNI:
                return "UNI";

            default:
                throw new IllegalArgumentException(sg + " not supported.");
        }
    }

    @Override
    public SponsorGroup convertToEntityAttribute(String string) {

            if (string == null)
                return null;

            switch (string) {
                case "MAIN":
                    return SponsorGroup.MAIN;

                case "TOP":
                    return SponsorGroup.TOP;

                case "OTHER":
                    return SponsorGroup.OTHER;

                case "PARTNER":
                    return SponsorGroup.PARTNER;

                case "UNI":
                    return SponsorGroup.UNI;

                default:
                    throw new IllegalArgumentException(string + " not supported.");
            }
    }
}
