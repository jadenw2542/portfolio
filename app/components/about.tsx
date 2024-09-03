
export default function About(){
    return (
        <div id="about" className="h-screen text-background scroll-mt-16 
        sm:scroll-mt-4">
            <h1 className="font-bold text-m sm:text-xl"> About Me</h1>
            Leo pede primis senectus lacinia lorem porta nonummy amet. Condimentum placerat vehicula pharetra cursus vestibulum 
            natoque commodo odio tellus sollicitudin eros est odio dignissim vehicula, vulputate dapibus integer praesent parturient
            proin facilisi a. Maecenas ligula scelerisque. Ipsum.
            Turpis blandit. llus vivaSmus curabitur Elit natoque non phasellus. 
            Auctor faucibus sit dictum, phasellus venenatis ultrices suscipit gravida ante taciti 
            cubilia porttitor cubilia sociosqu. Elementum. Dapibus gravida porttitor platea ultricies 
            penatibus dui hymenaeos per faucibus dolor. Odio mus aenean fusce viverra.
            <div className="text-foreground">This is standard body text.</div>
        <div className="card">
        <h2 className="text-card-foreground">Card Title</h2>
        <p className="text-card-foreground">Card description...</p>
        </div>
        <div className="text-muted-foreground">This is muted text for non-essential information.</div>
        <button className="text-primary-foreground">Primary Button</button>
        <button className="text-secondary-foreground">Secondary Button</button>
        <p className="text-accent-foreground">This is an accented text highlight.</p>
        <div className="text-destructive">Warning: This action is irreversible!</div>
        </div>
    )
}