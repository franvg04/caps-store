import "./banner.css"
export function Banner ({bannerImage, altText}) {
    return (
        <div className="banner">
            <img 
            className="banner-img"
            src={bannerImage} 
            alt={altText} 
            />
        </div>
    )
}