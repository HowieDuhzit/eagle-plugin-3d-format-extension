import PreviewCore, { Options as PreviewCoreOptions } from "@pecasha/3d-preview-core";
import Base from "./modules/base";

export default class extends Base {
    #previewCore = {} as PreviewCore;

    get preview() {
        return this.#previewCore;
    }

    constructor(options: Partial<PreviewCoreOptions>) {
        super();
        this.#previewCore = new PreviewCore(options);
        
        // Add VRM-specific initialization if needed
        this.#initVRMSupport();
    }
    
    #initVRMSupport() {
        // Add VRM-specific initialization code here if needed
        // This might involve setting up VRM-specific loaders or handlers
    }
}
