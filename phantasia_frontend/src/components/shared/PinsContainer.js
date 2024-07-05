import Pin from "./Pin";

const PinsContainer = ({ imagesData }) => {
    if (!imagesData) {
        return <p>Nothing to show</p>
    }
    return (
        <div className="columns-4 gap-3 w-[1200px] mx-auto space-y-3 p-10 ">
            {
                imagesData.map((image) => {
                    return <Pin 
                        id={image.id}
                        URL={image.urls.regular} 
                        description={image.alt_description} 
                        authorFirstName={image.user.first_name} 
                        authorSecondName={image.user.last_name}
                    />
                }
            )}

        </div>
    )
}

export default PinsContainer;