function Deadfish () {
    // Initialization
    var accumulator = 0;
    
    var refresh_accumulator = function () {
        if (accumulator == 256 || accumulator == -1) {
            // Overflow, reset accumulator
            accumulator = 0;
        }
    };
    
    var process = function (command) {
        switch (command) {
            case 'i':
                accumulator += 1;
                break;
            case 'd':
                accumulator -= 1;
                break;
            case 's':
                accumulator *= accumulator;
                break;
            case 'o':
                break;
            default:
                throw 'Unrecognized command';
        }
        refresh_accumulator();
    };

    var output_formatter = function (output) {
        var result = '';
        output.forEach(function (line) {
            result += (line + '<br/>');
        });
        return result;
    };
    
    this.compute = function (sequence) {
        var output = [],
            commands = sequence.split('')
            acc = accumulator;
        output.push('>>> ' + sequence);
        commands.forEach(function(command, index){
            try {
                if (command == 'o') {
                    output.push(accumulator);
                } else {
                    process(command);
                }
            } catch (exception){
                output.push('<error>' + exception + ' while executing command ' + sequence + ' at position ' + (parseInt(index, 10) + 1) + '</error>');
                accumulator = acc;
            }
        });
        return output_formatter(output);
    };
    
    this.reset = function () {
        accumulator = 0;
    };
}
