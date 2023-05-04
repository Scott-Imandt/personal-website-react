import React from 'react'
import PageCard from './PageCard'

function PageArrayList({ pageArrayList }) {
    let image = ""

    return (
        pageArrayList.map(page => {

            if (page.image === undefined) image = page.img;

            return (
                <PageCard
                    title={Object.keys(page)[0]}
                    body={Object.values(page)[0]}
                    img={image}
                >
                </PageCard>
            )
        })
    )
}

export default PageArrayList