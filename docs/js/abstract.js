const Abstract = () => {
    return (
        <section class="section hero is-light">
            <div class="container is-max-desktop">
                <div class="columns is-centered has-text-centered">
                    <div class="column is-four-fifths">
                        <h2 class="title is-3">Abstract</h2>
                        <div class="content has-text-justified">
                            <p>
                                Low-quality housing is associated with an increased risk of mosquito-borne dis-
                                eases. As certain roof characteristics are linked to an elevated risk of malaria,
                                classification of roof types based on remote sensing imagery can support assess-
                                ment of malaria risk and help preventing the disease. To support research in this
                                area, we release the Nacala-Roof-Material dataset, which contains drone images
                                from Mozambique with corresponding labels delineating houses and specifying
                                their roof types. The dataset defines a multi-task computer vision problem, compris-
                                ing object detection, classification, and segmentation. In addition, we benchmarked
                                different state-of-the-art approaches on the dataset. Canonical U-Nets, YOLOv8,
                                and a custom decoder on pretrained DINOv2 served as baselines. We show that
                                each of the methods has its advantages but none is superior on all tasks. While the
                                tasks are closely related, accurate segmentation of objects need not imply accurate
                                instance separation, and vice versa. This causes problems for methods designed
                                for pixel-level semantic segmentation such as the standard U-Net architecture. We
                                address this general issue by introducing a variant of the deep ordinal watershed
                                (DOW) approach, where several output maps are generated allowing for accu-
                                rate object delineation and separation. This improved the performance of both
                                the U-Net architecture and our systems based on segmentations using DINOv2
                                features.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}