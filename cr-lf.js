module.exports = function(RED) {
    function AddCrLf(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            msg.payload = msg.payload + "\r\n"; 
            //\r - Carriage Return   0x0D - 13
            //\n - Line Feed          0x0A  - 10
            node.send(msg);
        });
    }
    RED.nodes.registerType("cr-lf",AddCrLf);
}