import Card from "./Card";

function Tour({ tour,removeTour }) {
    return (
        <div>
            <div>
                <h2>Plan Application</h2>
            </div>
            <div>
                {
                    tour.map((item) => {
                        return <Card {...item} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
    );
}

export default Tour;