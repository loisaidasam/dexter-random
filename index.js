module.exports = {
    /**
     * The main entry point for the Dexter module
     *
     * @param {AppStep} step Accessor for the configuration for the step using this module.  Use step.input('{key}') to retrieve input data.
     * @param {AppData} dexter Container for all data used in this workflow.
     */
    run: function(step, dexter) {
        function randomIntInc (low, high) {
            return Math.floor(Math.random() * (high - low + 1) + low);
        }
        var low = step.input('low');
        var high = step.input('high');
        var result = { result: randomIntInc(low, high) };
        //Call this.complete with the module's output.  If there's an error, call this.fail(message) instead.
        this.complete(result);
    }
};
