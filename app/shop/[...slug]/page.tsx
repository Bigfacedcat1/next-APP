export default function Page({ params }: { params: { slug: string } }) {
    return <div>catch-all  @@@"{params.slug}</div>
}